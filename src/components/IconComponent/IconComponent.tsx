// IconComponent.tsx
import React from "react";
import {IconComponentProps} from "./IconComponent.types";
import * as Icons from "./Icons";

const IconComponent: React.FC<IconComponentProps> = ({iconName}) => {
    const SVGIcon = Icons[iconName];
    return <SVGIcon />;
};

export default IconComponent;
