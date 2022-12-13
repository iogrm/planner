import { NumberStringScalar } from './national_id.scalar';
import { TraitScalar } from './trait.scalar';

import path from 'path';
import fs from 'fs';
const scallars = ['./trait.scalar', './national_id.scalar'];
export const v = Object.values(NumberStringScalar);

export const allScalars = [NumberStringScalar, TraitScalar];
export const allScalars2 = [__dirname + 'dist/**/*.scalar.{ts,js}'];
