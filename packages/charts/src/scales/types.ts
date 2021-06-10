/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Scale } from '.';
import { ScaleType } from './constants';
import { ScaleBand } from './scale_band';
import { ScaleContinuous } from './scale_continuous';

/**
 * Check if a scale is logaritmic
 * @internal
 */
export function isLogarithmicScale(scale: Scale): scale is ScaleContinuous {
  return scale.type === ScaleType.Log;
}

/**
 * Check if a scale is Band
 * @internal
 */
export function isBandScale(scale: Scale): scale is ScaleBand {
  return scale.type === ScaleType.Ordinal;
}

/**
 * Check if a scale is continuous
 * @internal
 */
export function isContinuousScale(scale: Scale): scale is ScaleContinuous {
  return scale.type !== ScaleType.Ordinal;
}