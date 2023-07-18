import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg'


type RingProgressProps = {
    radius?: number;
};

const color = '#EE0F55';

const RingProgress = ({ radius = 100 }: RingProgressProps) => {
    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        }}>
            {/* <Text style={{ color: 'white' }}>RingProgress</Text> */}
            <Svg>
                <Circle r={radius} fill={color} />
            </Svg>

            
        </View>
    );
};

export default RingProgress;