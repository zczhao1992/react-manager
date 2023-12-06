import type { FC } from "react";
import LowCodeInputConf, { LowCodeInputPropsType } from "./LowCodeInput";
import LowCodeTitleConf, { LowCodeTitlePropsType } from "./LowCodeTitle";
import LowCodeParagraphConf, {
  LowCodeParagraphPropsType,
} from "./LowCodeParagraph";
import LowCodeInfoConf, { LowCodeInfoPropsType } from "./LowCodeInfo";
import LowCodeTextareaConf, {
  LowCodeTextareaPropsType,
} from "./LowCodeTextarea";
import LowCodeRadioConf, {
  LowCodeRadioPropsType,
  LowCodeRadioStatPropsType,
} from "./LowCodeRadio";
import LowCodeCheckboxConf, {
  LowCodeCheckboxPropsType,
  LowCodeCheckboxStatPropsType,
} from "./LowCodeCheckbox";

// 各个组件的prop type
export type ComponentPropsType = LowCodeInputPropsType &
  LowCodeTitlePropsType &
  LowCodeParagraphPropsType &
  LowCodeInfoPropsType &
  LowCodeTextareaPropsType &
  LowCodeRadioPropsType &
  LowCodeCheckboxPropsType;

// 统一，各个组件的统计属性类型
type ComponentStatPropsType = LowCodeRadioStatPropsType &
  LowCodeCheckboxStatPropsType;

// 统一，组件的配置
export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  PropComponent: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
  StatComponent?: FC<ComponentStatPropsType>;
};

// 全部的组件配置的列表
const componentConfList: ComponentConfType[] = [
  LowCodeInputConf,
  LowCodeTitleConf,
  LowCodeParagraphConf,
  LowCodeInfoConf,
  LowCodeTextareaConf,
  LowCodeRadioConf,
  LowCodeCheckboxConf,
];

// 组件的分组
export const componentConfGroup = [
  {
    groupId: "textGroup",
    groupName: "文本显示",
    components: [LowCodeInfoConf, LowCodeTitleConf, LowCodeParagraphConf],
  },
  {
    groupId: "inputGroup",
    groupName: "用户输入",
    components: [LowCodeInputConf, LowCodeTextareaConf],
  },
  {
    groupId: "chooseGroup",
    groupName: "用户选择",
    components: [LowCodeRadioConf, LowCodeCheckboxConf],
  },
];

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type);
}
