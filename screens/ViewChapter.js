import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import useLoadFonts from '../hooks/useLoadFonts'
import verseBullet from '../assets/images/verse.png'

export default function ViewChapter({ route }) {

  const [ chapter, setChapter ] = useState(null)
  const fontsLoaded = useLoadFonts()

  useEffect(async () => {
    setChapter(route.params.chapter)
  }, [])

  if (!chapter || !fontsLoaded) {
    return (
      <View style={ styles.loadingContainer }>
        <Text style={ styles.loadingText }>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.verses }>
        { chapter.verses && chapter.verses.map((verse, index) => (
          <View style={ styles.verseContainer } key={ index }>
            <Text style={ styles.verse }>
              <Image source={ verseBullet } resizeMode="contain" style={ styles.verseBullet }></Image>
              <Text>
                { verse }
              </Text>
            </Text>
          </View>
        )) }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#f8f8f8',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#808080'
  },
  container: {
    backgroundColor: '#f8f8f8'
  },
  verses: {
    padding: 20,
    paddingBottom: 10
  },
  verseContainer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1'
  },
  verse: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 34,
    fontFamily: 'PdmsIslamicFont',
    textAlign: 'right',
    lineHeight: 40,
    paddingHorizontal: 20
  },
  verseBullet: {
    width: 40,
    height: 20,
    marginLeft: 10,
    marginTop: 8
  }
})