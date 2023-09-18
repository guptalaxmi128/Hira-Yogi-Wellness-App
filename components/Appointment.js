import React, { useState, useEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import AppointmentHeader from "./AppointmentHeader";
import {
  useBookAppointmentMutation,
  useGetAppointmentSlotQuery,
} from "../services/signUpApi";


const Appointment = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [timeSlot, setTimeSlot] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [slotId,setSlotId]=useState('');
  const [error, setError] = useState('');

  const handleTextChange = (value) => {
    setText(value);
    if (value.length < 20) {
      setError("Patient Problem must be at least 20 characters long");
    } else {
      setError(""); // Clear the error message if it's valid
    }
  };

  const arrowUpImage = require("../assets/arrow-up.png");
  const arrowDownImage = require("../assets/arrow-down.png");

  const options = [
    { label: "Under 18", value: "under18" },
    { label: "18-24", value: "18-24" },
    { label: "25-34", value: "25-34" },
    { label: "35-44", value: "35-44" },
    { label: "45-54", value: "45-54" },
    { label: "55-64", value: "55-64" },
    { label: "65 or older", value: "65orolder" },
  ];

  const gender = [
    { id: "1", gender: "Male" },
    { id: "2", gender: "Female" },
  ];

  // console.log(selectedValue);

  const handleGenderPress = (gender) => {
    setSelectedGender(gender);
  };

  const handleTimeSlotPress = (id,time) => {
    setSelectedTime(time);
    setSlotId(id)
  };

  const renderItem = ({ item }) => {
    const isSelected = item.time === selectedTime;
    const backgroundColor = isSelected ? "#e08a44" : "white";
    const textColor = isSelected ? "white" : "#8e8e8e";

    return (
      <TouchableOpacity
        style={styles.timeSlotItem}
        onPress={() => handleTimeSlotPress(item.id,item.time)}
      >
        <View
          style={[
            styles.timeSlotInner,
            { backgroundColor, borderWidth: isSelected ? 0 : 1 ,marginLeft:responsiveWidth(4)},
          ]}
        >
          <Text style={[styles.timeSlotText, { color: textColor }]}>
            {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  console.log(slotId)

  const renderGenderItem = ({ item }) => {
    const isSelected = item.gender === selectedGender;
    const backgroundColor = isSelected ? "#e08a44" : "white";
    const textColor = isSelected ? "white" : "#8e8e8e";

    return (
      <TouchableOpacity
        style={styles.timeSlotItem}
        onPress={() => handleGenderPress(item.gender)}
      >
        <View
          style={[
            styles.timeSlotInner,
            { backgroundColor, borderWidth: isSelected ? 0 : 1 ,marginLeft:responsiveWidth(4) }
          ]}
        >
          <Text style={[styles.timeSlotText, { color: textColor }]}>
            {item.gender}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: "white",
      customTextStyle: {
        color: "orange",
      },
    },
  };

  const today = new Date();
  const nextSixDays = new Date();
  nextSixDays.setDate(today.getDate() + 6);

  const minDate = today.toISOString().split("T")[0];
  const maxDate = nextSixDays.toISOString().split("T")[0];
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const { data, isSuccess } = useGetAppointmentSlotQuery({
    date: selectedDate,
    country: "IN",
  });

  useEffect(() => {
    if (data && isSuccess && data.data) {
      setTimeSlot(data.data);
    }
  }, [data, isSuccess]);
  // console.log(data)

  const extractedTimeSlots = timeSlot.map((slot) => ({
    id: slot.id,
    time: slot.time,
  }));

  const theme = {
    calendarBackground: "#e08a44",
    textSectionTitleColor: "white",
    selectedDayTextColor: "orange",
    dayTextColor: "white",
    textDisabledColor: "gray",
    dotColor: "orange",
    arrowColor: "white",
    monthTextColor: "white",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    todayTextColor: "white",
    textDayFontSize: 16,
  };

  // console.log(extractedTimeSlots);
  const [bookAppointment] = useBookAppointmentMutation();

  const handleSubmit = async () => {
    if (fullName && selectedGender && text && phoneNumber && selectedValue)
      try {
        const formData = {
          patientName:fullName,
          patientGender: selectedGender,
          patientProblem: text,
          patientPhoneNumber: phoneNumber,
          patientAge: selectedValue,
          sloteId: slotId,
        };
        console.log(formData)
        const res = await bookAppointment(formData);
        // console.log(res.data.success)
        
        if(res.data.success){
          console.log(res);
          Alert.alert(res.data.message)
          setFullName(""); 
          setSelectedGender(""); 
          setText(""); 
          setPhoneNumber(""); 
          setSelectedValue("Select an Option"); 
          setSlotId("");
        }
      
      } catch (error) {
        console.error("Error:", error);
      }
  };

  return (
    <View style={styles.container}>
      <AppointmentHeader
        title={"Appointment"}
        icon={require("../assets/arrow-left.png")}
      />

      <ScrollView>
        <View style={{ width: "100%" }}>
          <Calendar
            theme={theme}
            markedDates={markedDates}
            onDayPress={handleDayPress}
            minDate={minDate}
            maxDate={maxDate}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
          style={styles.labelText}
          >
            Avaliable Time
          </Text>
          <FlatList
            data={extractedTimeSlots}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.timeSlotList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
          style={styles.labelText}
          >
            Name
          </Text>
          <TextInput
            style={styles.input}
            value={fullName}
            placeholder="Enter Name"
            onChangeText={(text) => setFullName(text)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text
            style={styles.labelText}
          >
            Mobile Number
          </Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            placeholder="Enter Mobile Number"
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>

        <View style={{ marginTop: 20, marginBottom: isOpen ? 320 : 0 }}>
          <Text
          style={styles.labelText}
          >
            Age
          </Text>
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              onPress={() => setIsOpen(!isOpen)}
              style={styles.dropdown}
            >
              <Text
                style={{ padding: 12, fontFamily: "Poppins", fontSize: 16,color:'gray' }}
              >
                {selectedValue || "Select an Option"}
              </Text>
              <Image
                source={isOpen ? arrowUpImage : arrowDownImage}
                style={styles.arrowImage}
              />
            </TouchableOpacity>

            {isOpen && (
              <View style={styles.dropdownMenu}>
                {options.map((option,index) => (
                  <>
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedValue(option.value);
                        setIsOpen(false);
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Poppins",
                          fontSize: 16,
                          height: 40,
                          padding: 10,
                          color:'gray'
                        }}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.hr} />
                  </>
                ))}
              </View>
            )}
          </View>
        </View>
        <View 
        style={{ marginTop: 10 }}
        >
          <Text
           style={styles.labelText}
          >
            Purpose
          </Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            value={text}
            onChangeText={handleTextChange}
          />
           {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
         style={styles.labelText}
          >
            Gender
          </Text>
          <FlatList
            data={gender}
            renderItem={renderGenderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.timeSlotList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit}
          // onPress={() => navigation.navigate("Show Appointment")}
        >
          <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 20 }}>
            <View
              style={{
                width: "95%",
                height: 50,
                backgroundColor: "#e08a44",
                flexDirection: "row",
                alignItems: "center",
                // padding: 20,
                borderRadius: 10,
                borderColor: "orange",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 4,
                  width: "100%",
                  height: 30,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#fff",
                  alignItems: "center",
                }}
              >
                Book Now
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // alignItems: "center",
    width: "100%",
    fontFamily: "Poppins",
  },
  timeSlotList: {
    paddingVertical: 16,
  },
  timeSlotItem: {
    borderRadius: 8,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  timeSlotText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "gray",
    paddingTop: 10,
    height: 40,
  },
  timeSlotInner: {
    backgroundColor: "white",
    // elevation: 2,
    borderRadius: 8,
    width: 85,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#8e8e8e",
  },
  dropdownContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    borderRadius: 10,
    fontSize: responsiveFontSize(2),
    position: "relative",
  },
  dropdown: {
    // position:'absolute',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    borderColor: "#dcdcdc",
    height: responsiveHeight(7),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
  dropdownMenu: {
    backgroundColor: "#fff",
    marginTop: 2,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 4,
    fontFamily: "Poppins",
  },
  hr: {
    position: "relative",
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    opacity: 0.1,
    marginTop: 3,
    // marginBottom: 10,
  },
  arrowImage: {
    width: 20,
    height: 20,
    margin: 15,
  },
  textArea: {
    borderColor: "#dcdcdc",
    borderWidth: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(15),
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    borderRadius: 10,
    padding: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
  },
  labelText: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(5),
    fontFamily: "Poppins",
    color: "gray",
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    borderRadius: 10,
    padding: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
    marginLeft: responsiveWidth(5),
  },
});
