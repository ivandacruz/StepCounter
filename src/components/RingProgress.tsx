import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

type RingProgressProps = {
    radius?: number;
    strokeWidth ?: number;
};

const color = "#00E5BC";
// const color = "#01679C";
// const color = "#EE0F55";

const RingProgress = ({ 
    radius = 100, 
    strokeWidth = 20, 
}: RingProgressProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    return (
        <View
            style={{
                width: radius * 2,
                height: radius * 2,
                alignSelf: "center",
                // backgroundColor:'orange',
            }}
        >
            <Svg>
                {/* Background */}
                <Circle 
                    cx={radius} 
                    cy={radius} 
                    r={innerRadius} 
                    // fill={'green'} 
                    strokeWidth={strokeWidth} 
                    stroke={color} 
                    opacity={0.2}
                />
                {/* Foreground */}
                <Circle 
                    cx={radius} 
                    cy={radius} 
                    r={innerRadius} 
                    // fill={'green'} 
                    strokeWidth={strokeWidth} 
                    stroke={color} 
                    // opacity={0.2}
                    strokeDasharray={[circumference, 5]}
                />
            </Svg>
        </View>
    );
};

export default RingProgress;
