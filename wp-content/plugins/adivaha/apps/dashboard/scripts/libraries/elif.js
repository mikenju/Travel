(function() {
    var elif = angular.module('elif', []);
    var getBlockElements = function(nodes) {
        if (!nodes || !nodes.length) {
            return $();
        }
        var startNode = nodes[0];
        var endNode = nodes[nodes.length - 1];
        if (startNode === endNode) {
            return $(startNode);
        }
        var element = startNode;
        var elements = [element];
        do {
            element = element.nextSibling;
            if (!element) {
                break;
            }
            elements.push(element);
        } while (element !== endNode);
        return $(elements);
    };
    elif.factory('elif', [function() {
        var getConditionals = function(scope) {
            if (angular.hasOwnProperty.call(scope, 'elif.conditionals')) {
                var conditionals = scope['elif.conditionals'];
                return conditionals[conditionals.length - 1];
            }
        };
        return {
            create: function(scope, fn, callback) {
                var conditionals = [{
                    fn: fn,
                    callback: callback || angular.identity
                }];
                var conditionalValues = [];
                scope.$watch(function() {
                    conditionalValues.length = conditionals.length;
                    for (var i = 0, len = conditionals.length; i < len; i++) {
                        conditionalValues[i] = !!conditionals[i].fn();
                    }
                    return conditionalValues;
                }, function(conditionalValues) {
                    var index = -1;
                    for (var i = 0, len = conditionals.length; i < len; i++) {
                        if (conditionalValues[i]) {
                            conditionals[i].callback(true);
                            index = i;
                            i++;
                            break;
                        } else {
                            conditionals[i].callback(false);
                        }
                    }
                    for (; i < len; i++) {
                        conditionals[i].callback(false);
                    }
                    conditionals.fallthrough && conditionals.fallthrough(index === -1);
                    return index;
                }, true);
                if (!angular.hasOwnProperty.call(scope, 'elif.conditionals')) {
                    scope['elif.conditionals'] = [];
                }
                scope['elif.conditionals'].push(conditionals);
            },
            extend: function(scope, fn, callback) {
                var conditionals = getConditionals(scope);
                if (!conditionals) {
                    throw new Error('elif.extend: no if found at this level');
                }
                if (conditionals.fallthrough) {
                    throw new Error('elif.extend: else-if after else');
                }
                conditionals.push({
                    fn: fn,
                    callback: callback
                });
            },
            fallthrough: function(scope, fn, callback) {
                var conditionals = getConditionals(scope);
                if (!conditionals) {
                    throw new Error('elif.fallthrough: no if found at this level');
                }
                if (conditionals.fallthrough) {
                    throw new Error('elif.fallthrough: else already found at this level');
                }
                conditionals.fallthrough = callback;
            }
        };
    }]);
    var elifDirective = function(name, method, getter) {
        elif.directive(name, ['$animate', '$document', '$injector', 'elif', function($animate, $document, $injector, elif) {
            var getterFn = getter && $injector.invoke(getter);
            return {
                transclude: 'element',
                restrict: 'A',
                priorty: 600,
                terminal: true,
                link: function(scope, element, attrs, ctrls, transcludeFn) {
                    var watchFn = getterFn && getterFn(scope, element, attrs);
                    var childScope;
                    var childElement;
                    var previousElements;
                    elif[method](scope, watchFn, function(value, conditionals) {
                        if (value) {
                            if (!childScope) {
                                childScope = scope.$new();
                                transcludeFn(childScope, function(clone) {
                                    clone[clone.length + 1] = $document[0].createComment(' end ' + name + ': ' + attrs[name] + ' ');
                                    childElement = clone;
                                    $animate.enter(clone, element.parent(), element);
                                });
                            }
                        } else {
                            if (childScope) {
                                childScope.$destroy();
                                childScope = null;
                            }
                            if (previousElements) {
                                previousElements.remove();
                                previousElements = null;
                            }
                            if (childElement) {
                                previousElements = getBlockElements(childElement);
                                $animate.leave(previousElements, function() {
                                    previousElements = null;
                                });
                                childElement = null;
                            }
                        }
                    });
                }
            };
        }]);
    };
    var getter = function(name) {
        return ['$parse', function($parse) {
            return function(scope, element, attrs) {
                var testFn = $parse(attrs[name]);
                return function() {
                    return !!testFn(scope);
                };
            };
        }];
    };
    elif.directive('ngIf', ['$injector', 'elif', function($injector, elif) {
        var getterFn = $injector.invoke(getter('ngIf'));
        return {
            priority: 600,
            link: function(scope, element, attrs) {
                var watchFn = getterFn(scope, element, attrs);
                elif.create(scope, watchFn);
            }
        }
    }]);
    elifDirective('ngElseIf', 'extend', getter('ngElseIf'));
    elifDirective('ngElif', 'extend', getter('ngElif'));
    elifDirective('ngElse', 'fallthrough');
})();