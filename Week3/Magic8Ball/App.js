import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const minValue = 1;
  const maxValue = 20;
  // state management variables

  const [userQuestion, setUserQuestion] = useState("Ask a question")
  const [response, setResponse] = useState("Ask a question to recieve wisdom.")
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];



  function start8Ball(){
    setModalIsVisible(true);
    questionAsked();
  }
  function end8Ball(){
    setModalIsVisible(false);
    setUserQuestion("");
    setResponse("Ask a question to recieve wisdom");
  }


  function questionAsked() {
    const rndNum = Math.floor(Math.random() * (maxValue-minValue))+minValue;
    setResponse(responses[rndNum]);
  }



  const [modalIsVisible, setModalIsVisible] = useState(false);




  return (
    <>
      <SafeAreaView style={styles.root}>
      <StatusBar style='auto' />
     
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Magic 8 Ball</Text>
      </View>

      <View style={styles.ballContainer}>
        <Text style={styles.ballText}>{response}</Text>
      </View> 

      <View style={styles.askButtonContainer}>
        <Pressable
          onPress={start8Ball}
          style = {({pressed}) => {
            return pressed && styles.pressedButton;
          }}
        >
          <View style={styles.askButton}>
            <Text style={styles.askText}>Seek Wisdom</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
            <TextInput 
            style={styles.textInput}
            placeholder="What do you want to know?"
            onChangeText={setUserQuestion}
            value = {userQuestion}
            keyboardType="default"
            /></Text>
      </View>  

      <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <View style={styles.ballContainer2}>
              <Text style={styles.ballText}>{response}</Text>
            </View> 
            <View style={styles.questionContainer}>
              <Text style={styles.questionText2}>{userQuestion}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                title="Continue Asking"
                color = "blue"
                onPress={end8Ball}
                />
              </View>
            </View>
          </SafeAreaView>
      </Modal>

      </SafeAreaView>
      
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: "#3400a4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "white"
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  askButtonContainer: {
    flex: 1,
    justifyContent:"center",

  },
  askButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10
  },
  askText: {
    color:"black",
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  pressedButton: {
    opacity: 0.5    
  },
  ballContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "75%",
    borderWidth: 10,
    borderRadius: 1000,
    borderColor: "black",
    paddingVertical: 20,
    
  },
  ballText: {
    color: "white",
    textAlign: "center",
    fontWeight:"bold",
    fontSize: 30
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    width: "80%",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "black",
    paddingVertical: 20,
  },
  questionText: {
    color:"black",
    padding: 8,
    fontSize: 20,
    textAlign: "center"
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#52b7ffff",
    alignItems: "center"
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    color:"gray",
    padding: 8,
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 16
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  },
    ballContainer2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "80%",
    borderWidth: 10,
    borderRadius: 1000,
    borderColor: "black",
    paddingVertical: 20,
    marginTop: 30,
    marginBottom: 30,
    fontSize: 50
  },
  questionText2: {
    color:"black",
    padding: 8,
    fontSize: 30,
    textAlign: "center"
  },
});
