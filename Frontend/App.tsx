import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ヘッダー</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>コンテンツエリア</Text>
          {/* ここにアプリの主要なコンテンツを追加します */}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>フッター</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0', // SafeAreaの背景色
  },
  container: {
    flex: 1,
    flexDirection: 'column', // 縦方向に要素を配置
  },
  header: {
    height: 60,
    backgroundColor: '#a0a0ff', // ヘッダーの背景色
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff', // ヘッダーテキストの色
  },
  content: {
    flex: 1, // 残りのスペースをすべて占める
    backgroundColor: '#ffffff', // コンテンツエリアの背景色
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 16,
  },
  footer: {
    height: 50,
    backgroundColor: '#c0c0c0', // フッターの背景色
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#333333', // フッターテキストの色
  },
});
