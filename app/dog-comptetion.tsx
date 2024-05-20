import React from 'react';
import {View, Text, Image, TextField, Button} from "react-native-ui-lib";
import { StyleSheet, ScrollView } from 'react-native';

const ArticlePage = () => {

    // Create a list of comments
    const [comments, setComments] = React.useState([
        {
            user: "John Doe",
            comment: "This is a comment",
            time: "2 hours ago"
        },
        {
            user: "Jane Doe",
            comment: "This is another comment",
            time: "1 hour ago"
        },
    ]);

    const [comment, setComment] = React.useState("");

    // command to add the comment
    const addComment = () => {
        setComments([...comments, {user: "Jennifer Lopez", comment, time: "now"}]);
    }



    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{uri:"https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                cover
            />
            <View padding-10>
                <Text text40 left>Dog Competition</Text>
                <Text text80 gray>May 30, 2024</Text>
                <Text marginV-10 marginB-30>
                    This is the content of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Fusce auctor, purus eget
                    sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.
                </Text>
                <Text text60 marginB-20>Comments</Text>
                {comments.map((comment, index) => (
                    <View key={index} marginB-10 style={styles.commentContainer}>
                        <View style={styles.commentFirstRow}>
                            <Text text70>{comment.user}</Text>
                            <Text text90M grey40>{comment.time}</Text>
                        </View>
                        <Text>{comment.comment}</Text>
                         {/* Added line */}
                    </View>
                ))}
                <Text text60 marginT-10>Add Comment</Text>
                <View>
                    <TextField
                        placeholder="Enter your comment"
                        onChangeText={setComment}
                        value={comment}
                        style={styles.input}
                    />
                    <Button
                        label="Submit"
                        onPress={addComment}
                    />
                </View>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
        height: 40
    },
    commentFirstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    commentContainer:{
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    }
});

export default ArticlePage;