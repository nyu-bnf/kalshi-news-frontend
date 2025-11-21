import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DashboardHeader from "../components/DashboardHeader";
import MarketChart from "../components/MarketChart";
import NewsMarketCard from "../components/NewsMarketCard";

export default function DashboardScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  return (
    <View style={styles.container}>
      <DashboardHeader showSearch={true} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* creating a scrollable section of the categories for news */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {[
            "Trending",
            "Politics",
            "Sports",
            "Finance",
            "Culture",
            "Science",
            "Technology",
            "Entertainment",
          ].map((curr) => (
            <TouchableOpacity
              key={curr}
              onPress={() => setSelectedCategory(curr)}
            >
              <Text
                style={[
                  styles.categoryText,
                  curr === selectedCategory
                    ? styles.categoryActive
                    : styles.categoryInactive,
                ]}
              >
                {curr}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* market Chart Component */}
        <Text style={styles.holdingsTitle}>Your Holdings</Text>
        <View style={styles.chartContainer}>
          <MarketChart />
        </View>

        <Text style={styles.forYouTitle}>For You</Text>

        {/* News Market Card component */}
        <NewsMarketCard
          newsTitle="Kalshi markets still forecast record-breaking government shutdown"
          newsCategory="Politics"
          newsImage={require("../assets/icon.png")}
          marketIcon={require("../assets/icon.png")}
          marketQuestion="Next US Presidential Election Winner?"
          candidates={[
            { name: "J.D. Vance", percentage: 32 },
            { name: "Gavin Newsom", percentage: 22 },
          ]}
          onSeeMorePress={() => navigation.navigate("PressOnBet")}
          isActive={true}
        />

        <NewsMarketCard
          newsTitle="Will there be a government shutdown in 2025?"
          newsCategory="Politics"
          newsImage={require("../assets/icon.png")}
          marketIcon={require("../assets/icon.png")}
          marketQuestion="Government Shutdown Before 2026?"
          candidates={[
            { name: "Yes", percentage: 65 },
            { name: "No", percentage: 35 },
          ]}
          onSeeMorePress={() => navigation.navigate("PressOnBet")}
          isActive={false}
        />

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  categoryScroll: {
    marginBottom: 24,
    marginTop: 8,
  },
  categoryText: {
    fontSize: 16,
    marginRight: 24,
  },
  categoryActive: {
    fontWeight: "700",
    color: "#000000",
  },
  categoryInactive: {
    color: "#9CA3AF",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 12,
  },
  holdingsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#C5C5C5",
    marginBottom: 12,
  },
  forYouTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#10C287",
    marginBottom: 12,
  },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 200,
  },
});
