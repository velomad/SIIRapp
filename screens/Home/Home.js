import React, { useState } from "react";
import {
  Alert,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import * as Haptics from "expo-haptics";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    sheetRef.current.snapTo(0);
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: "100%",
        zIndex: 10,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <BottomSheet
        ref={sheetRef}
        snapPoints={["70%", "40%", "0%"]}
        initialSnap={2}
        callbackNode={fall}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
      <TouchableOpacity onPress={handleLongPress}>
        <Text>open model</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});
