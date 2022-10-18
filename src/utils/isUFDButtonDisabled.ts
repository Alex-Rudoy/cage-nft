import { hasValue } from './hasValue';

import {
  OperatorsEnum,
  RuleTypesEnum,
  UserFilterBasicRuleType,
  UserFilterExtendedRuleType,
} from '@store/segments/segmentInsights/segmentInsights.types';

export const isUFDButtonDisabled = (
  rule: UserFilterBasicRuleType | Partial<UserFilterExtendedRuleType>
): boolean => {
  if (rule.type === RuleTypesEnum.boolean && rule.operator) return false;

  if (rule.type === RuleTypesEnum.boolean && !rule.operator) return false;

  if (
    rule.type === RuleTypesEnum.array &&
    (rule.value as string[] | number[])?.length
  )
    return false;

  if (
    rule.type === RuleTypesEnum.dateTime &&
    rule.operator === OperatorsEnum.between &&
    typeof rule.value === 'string' &&
    rule.value.toString().split(',').length > 1
  )
    return false;

  if (
    rule.type !== RuleTypesEnum.boolean &&
    rule.type !== RuleTypesEnum.array &&
    (rule.type !== RuleTypesEnum.dateTime ||
      rule.operator !== OperatorsEnum.between) &&
    hasValue(rule.value)
  )
    return false;

  return true;
};
