import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DashboardHeader from "../components/DashboardHeader";

export default function PressOnBetScreen({ navigation, route }) {
  const [selectedVote, setSelectedVote] = useState(null);

  const betTitle =
    route?.params?.title || "Next US Presidential Election Winner?";
  const candidates = route?.params?.candidates || [
    { name: "J.D. Vance", percentage: 32 },
    { name: "Gavin Newsom", percentage: 22 },
  ];

  const newsArticles = [
    {
      id: 1,
      title:
        "Kalshi markets still forecast record-breaking government shutdown",
      category: "Politics",
      source: "CNN",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
    {
      id: 2,
      title: "What to expect out of New York on Election Day?",
      category: "Politics",
      source: "CNBC News",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
    {
      id: 3,
      title: "Trump arrives in South Korea: Senate rejects latest funding bill",
      category: "Politics",
      source: "Fox News",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
    {
      id: 4,
      title: "Newsom 2028: California Governor To Decide On White House Bid",
      category: "Politics",
      source: "BBC",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
    {
      id: 5,
      title:
        "Donald Trump Ponders Third Term: \"I'm Not Allowed to Run. It's Too Bad\"",
      category: "Politics",
      source: "New York Times",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
    {
      id: 6,
      title: "Probable Candidates for 2028: Gavin Newsom vs. J.D. Vance?",
      category: "Politics",
      source: "Washington Post",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
    {
      id: 7,
      title: "2028 Democratic Polls Show Top Candidates in Three States",
      category: "Politics",
      source: "ABC News",
      image: "https://via.placeholder.com/80x60/4A5568/FFFFFF?text=News",
    },
  ];

  return (
    <View style={styles.container}>
      <DashboardHeader />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* showcasing the bet at the top of the page */}
        <View style={styles.betCard}>
          <View style={styles.betHeader}>
            <Image
              source={{
                uri: "https://blocks.astratic.com/img/general-img-landscape.png",
              }}
              style={styles.betIcon}
            />
            <Text style={styles.betTitle}>{betTitle}</Text>
          </View>

          {/* showcasing the candidates and their percentages */}
          {candidates.map((candidate, index) => (
            <View key={index} style={styles.candidateRow}>
              <Text style={styles.candidateName}>{candidate.name}</Text>
              <View style={styles.candidateRight}>
                <Text style={styles.candidatePercentage}>
                  {candidate.percentage}%
                </Text>
                <TouchableOpacity
                  style={[
                    styles.voteButton,
                    styles.yesButton,
                    selectedVote === `${index}-yes` && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedVote(`${index}-yes`)}
                >
                  <Text
                    style={[
                      styles.yesButtonText,
                      selectedVote === `${index}-yes` &&
                        styles.selectedButtonText,
                    ]}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.voteButton,
                    styles.noButton,
                    selectedVote === `${index}-no` && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedVote(`${index}-no`)}
                >
                  <Text
                    style={[
                      styles.noButtonText,
                      selectedVote === `${index}-no` &&
                        styles.selectedButtonText,
                    ]}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* mapping through news articles related to the bet */}
        {newsArticles.map((article) => (
          <TouchableOpacity key={article.id} style={styles.newsCard}>
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{article.title}</Text>
              <Text style={styles.newsCategory}>{article.category}</Text>
            </View>
            <View style={styles.newsRight}>
              <Image
                source={{
                  uri: "https://blocks.astratic.com/img/general-img-landscape.png",
                }}
                style={styles.newsImage}
              />
              <Text style={styles.newsSource}>{article.source}</Text>
            </View>
          </TouchableOpacity>
        ))}

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  betCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  betHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  betIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  betTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  candidateRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  candidateName: {
    fontSize: 16,
    color: "#374151",
    flex: 1,
  },
  candidateRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  candidatePercentage: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginRight: 8,
  },
  voteButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  yesButton: {
    backgroundColor: "#EEF2FF",
    borderColor: "#0342FF",
  },
  noButton: {
    backgroundColor: "#F9EDFF",
    borderColor: "#9F5FFF",
  },
  selectedButton: {
    opacity: 1,
  },
  yesButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#275CFF",
  },
  noButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#B626FF",
  },
  selectedButtonText: {
    color: "#000",
  },
  newsCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  newsContent: {
    flex: 1,
    marginRight: 12,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    lineHeight: 22,
  },
  newsCategory: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  newsRight: {
    alignItems: "flex-end",
  },
  newsImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginBottom: 4,
  },
  newsSource: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});
