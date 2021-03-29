import {StyleSheet} from "react-native"

 const Styles = StyleSheet.create({
        mainContainer: {
            width:"100%",
            height:260,
        },
        constiner:{
            backgroundColor: "#7cac6c",
            width:"100%",
            height:170,
            flexDirection: "column",
            borderTopRightRadius:0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:10,
        },
        viewAlignItemCenter:{  
            alignItems:"center",   
        },
        textviewstyle: {
            color: "#FFFFFF",
            marginTop: 5
        },
        dashboard:{
            fontSize:20,
            marginTop:20
        },
        styleheader:{
            fontWeight:"bold", 
            fontSize:28
        },
        stylelocationandTimetextview:{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight:10,
            marginLeft:10,
        },
        location:{
            fontSize:13, 
            marginLeft:10
        },
        time:{
            fontSize:13, 
            marginRight:15
        },
    
        card:{
            flexDirection:'column',
            backgroundColor: "#ffffff",
            borderRadius: 10,
            marginLeft: 15,
            marginRight: 15,
            marginTop:10,
        },
        imageview:{
            width: 73,
            height: 78,
            borderRadius:50,
            borderColor:"#7cac6c",
            borderWidth:1,
            marginTop:15,
            marginLeft:10, 
        },
        img:{
            width:70,
            height:76
        },
        redcircle:{
            width:16,
            height:16,
            backgroundColor:"red",
            borderRadius:20,
            position:"absolute",
            left:8,
            bottom:35
        },
        cardheader:{
            marginLeft:8,
            marginTop:15,
            fontSize:24,
            fontWeight:"bold"
        },
        cardDescription:{
            marginLeft:8,
            opacity:.5,
            fontSize: 14
        },
        cardDate:{
            marginLeft:8,
            marginTop:8, 
            marginBottom:25,
            fontWeight:"bold",
            fontSize:14,
        },
        cardbutton:{
            marginRight:30,
            width:110,
            height:40,
            backgroundColor:'#5b9864',
            color:"#FFFFFF",
            borderRadius:25,
            position:"absolute",
            end:0,
            bottom:0,
        },
        button:{
            marginTop:5, 
            color:"#ffffff",
            textAlign:"center",
            fontSize:20,
            fontWeight:"bold"
        }
    })

export default Styles