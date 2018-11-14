/**
 * @file Behavior
 * @author sparklewhy@gmail.com
 */

'use strict';

/* global Behavior:false */

import {normalizeBehavior} from './helper';
import mixinStrategy from './strategy';
import {normalizeAttributeNames} from '../../helper/component';

export default function (behavior) {
    let componentBehavior;
    return isPage => {
        if (isPage || !mixinStrategy.useNativeBehavior) {
            return behavior;
        }

        if (!componentBehavior) {
            componentBehavior = normalizeBehavior(behavior);
            let behaviorInfo = componentBehavior.behavior;
            if (behaviorInfo) {
                /* eslint-disable babel/new-cap */
                componentBehavior.behavior = Behavior(
                    normalizeAttributeNames(behaviorInfo)
                );
            }
        }
        return componentBehavior;
    };
}

