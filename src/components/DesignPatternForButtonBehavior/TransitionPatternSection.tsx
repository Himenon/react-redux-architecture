import * as React from "react";
import * as PatternSection from "./case/PatternSection";
import * as classNames from "./button-pattern-section.scss";

export interface Props extends PatternSection.Props {}

const TransitionPatternSection: React.VFC<Props> = ({ ...props }: Props) => {
  return <PatternSection.Component className={classNames.patternSection} {...props} />;
};

export { TransitionPatternSection as Component };
