import React, {useState} from 'react'
import { View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-web';
import './App.css';

const Booking = () => {
    const [row1,setRow1]=useState([
        {empty:true , selected:false},
        {empty:true , selected:false},
        {empty:false , selected:false},
        {empty:true , selected:false},
        {empty:true , selected:false},
        {empty:false , selected:false},
        {empty:true , selected:false},
        {empty:true , selected:false},
        {empty:false , selected:false},
        {empty:true , selected:false}
    ]);
    const onSelectRow1=index =>{
        let tempRow=[];
        tempRow=row1;
        tempRow.map((item,ind) =>{
            if(index === ind){
                if(item.selected === true ){
                    item.selected =false;
                    item.empty = true;

                }else {
                    item.selected =true;
                    item.empty = false;
                }
            }
        })
        let tempSeats =[];
        tempRow.map(item =>{
            tempSeats.push(item)
        })
        setRow1(tempSeats);
    }
    return (  
        <View style={{flex:1,margin:20}}>
              
                <View style ={{backgroundColor:'#e2e7e9',alignItems:'center',justifyContent:'center'}}><div><strong>Book the Slots </strong></div>
                <br/> </View>
            <View style={{flexDirection:"row"}}>
                
            <View style={{width:'18%', borderWidth:1,height:450, borderRadius:5, bordercolor:'green',alignItems:'left',margin:10}}>
            
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center',marginTop:30}}>
            <View>
                <FlatList data={row1} numColumns={2} renderItem={({item,index})=> {

                    return(
                        <TouchableOpacity style={{margin:20}} onPress = {()=>{
                            if(item.selected === false && item.empty === false){
                                alert('already booked')
                            }else {
                                onSelectRow1(index)
                            }
                        }}>
                            {
                                item.empty === false && item.selected === true?
                                (<View style ={{width:40,height:40,borderRadius:5,backgroundColor:"yellow"}}></View>): item.empty === true && item.selected === false?
                                (<View style ={{width:40,height:40,borderRadius:5,backgroundColor:"blue"}}></View>):item.empty === false && item.selected === false?
                                (<View style ={{width:40,height:40,borderRadius:5,backgroundColor:"green"}}></View>):null 

                                
                            }
                        </TouchableOpacity> 
                        
                    )
                }
            }/>
        
            </View>
            
            </View>
                
            </View>

            <view>
            <div><strong>Total Slots:<text>  10 </text></strong></div><br/>
            <div><strong>Available Slots: </strong></div><br/>
            <button type="button" style ={{width:100,height:30,borderRadius:5,backgroundColor:"blue", color:"white"}} > Book Now </button> <br/><br/>
            <button type="button" style ={{width:100,height:30,borderRadius:5,backgroundColor:"#9ba0a1;",color:"success"}} >Cancle </button> 
            </view>
            
        </View>
    </View>

    );
}; export default Booking

