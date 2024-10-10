import React, { useState } from 'react'
import { useCameraDevice } from 'react-native-vision-camera'
import { Camera } from 'react-native-vision-camera-text-recognition';
import {StyleSheet} from 'react-native';


function Home (){
    const [data,setData] = useState(null)
    const device = useCameraDevice('back');
    console.log(data)
    return(
        <>
            {!!device && (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive
                    options={{
                        language: 'latin'
                    }}
                    mode={'recognize'}
                    callback={(d) => setData(d)}
                />
            )}
        </>
    )
}

export default Home;


