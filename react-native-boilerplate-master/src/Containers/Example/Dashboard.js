import React from "react"
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import {useState} from "react";
import Styles from "@/Theme/DashboardStyle/Styles"


const Dashboard =()=>{
    const [activetime, setactivetime] = useState({ss:0, mm:0, hh:0})
    const [interval, setinterval] = useState()
    const [status , setstatus] = useState(false)
    const [initialtime, setinitailtime]= useState({hour:0, minute:0, postfix: ""})

    let updatedsec= activetime.ss, updatedmin= activetime.mm, updatedhour=activetime.hh;
    const times = ()=>{
        if(updatedmin===60){
            updatedhour++;
            updatedmin=0;
        }if(updatedsec===60){
            updatedmin++;
            updatedsec=0;
        }
        updatedsec++;
        return setactivetime({ss:updatedsec, mm:updatedmin, hh:updatedhour})
    }

    const timestart=()=>{
        const getdate = new Date()
        const hours = getdate.getHours()
        const minutes = getdate.getMinutes()
        if(hours>12){
            const h = hours%12
            setinitailtime({hour: h, minute:minutes, postfix:"PM"})
        }else{
            setinitailtime({hour: hours, minute:minutes, postfix:"AM"})
        }
        times()
        setstatus(true)
        setinterval(setInterval(times, 1000));
    }

    const stopinterval =()=>{
        clearInterval(interval)
        setstatus(false)
        setinitailtime(null)
        setactivetime({ ss:0, mm:0, hh:0})
    }

    return(
        <View style={[Styles.mainContainer, {height:status? 290:260}]} >
            <View style={Styles.constiner}>
                <View style={Styles.viewAlignItemCenter}>
                    <Text style={[Styles.textviewstyle, Styles.dashboard]}>Dashboard</Text>
                    <Text style={[Styles.textviewstyle, Styles.styleheader]}>GOOD MORNING</Text>
                </View>
                <View style={Styles.stylelocationandTimetextview}>
                    <Text style={[Styles.textviewstyle, Styles.location]}>Location</Text>
                    <Text style={[Styles.textviewstyle, Styles.time]}>Time</Text>
                </View>
                <View>
                    <View  style={[Styles.card, {marginLeft:status? 15:20, marginRight: status? 15:20}]}>
                        <View style={{flexDirection:"row"}}>
                            <View style={Styles.imageview}>
                                <Image style={Styles.img} source={require("./../../Assets/Images/profile.png") }></Image>
                            </View>
                            <View>
                                <Text style={Styles.cardheader}>
                                    Russell Noble
                                </Text>
                                <Text style={Styles.cardDescription}>
                                    Scheduled to work at kitchen
                                </Text>
                                {!status &&(
                                    <Text style={Styles.cardDate}>
                                    10:00 AM - 7:30PM
                                    </Text>
                                )}
                            </View>
                            <View style={[Styles.redcircle, {bottom: status? 15: 40}]}/>
                        
                        </View>
                        {status &&(
                            <View style={{flexDirection:"row"}}>
                                <Text style={Styles.cardDate}>Start Time:</Text>
                                <Text style={Styles.cardDate}>{`${initialtime.hour}:${initialtime.minute} ${initialtime.postfix}`}</Text>
                                <Text style={Styles.cardDate}>Active Time</Text>
                                <Text style={Styles.cardDate}>{`${activetime.hh} Hr ${activetime.mm} Min ${activetime.ss} Sec`}</Text>
                            </View>
                        )}
                    </View>                   
                </View>
            </View>
            {status &&(
                <TouchableOpacity style={Styles.cardbutton} onPress={stopinterval}>
                    <Text style={Styles.button}>End</Text>
                </TouchableOpacity>
                )}
            {!status && (
                <TouchableOpacity style={Styles.cardbutton} onPress={timestart}>
                    <Text style={Styles.button}>START</Text>
                </TouchableOpacity>
            )}                  
        </View>
    )
}



export default Dashboard;