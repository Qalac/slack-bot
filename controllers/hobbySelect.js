var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

var hobbySelect = async({body, ack, say}) => {
    await ack(); 
    say({
        "type": "home",
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "What are your favourite hobbies?"
                },
                "accessory": {
                    "type": "multi_static_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select options",
                        "emoji": true
                    },
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Football",
                                "emoji": true
                            },
                            "value": "value-0"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Music",
                                "emoji": true
                            },
                            "value": "value-1"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Sleep",
                                "emoji": true
                            },
                            "value": "value-2"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Movies",
                                "emoji": true
                            },
                            "value": "value-3"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Basketball",
                                "emoji": true
                            },
                            "value": "value-4"
                        }
                    ],
                    "action_id": "multi_static_select-action"
                }
            }
        ]
    })

    let userID = body.user.id
    let feeling = body.actions[0].selected_option.text.text

    await prisma.response.create({
        data: {
            id: userID,
            feeling: feeling
        }
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = {
    hobbySelect: hobbySelect,
}