import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Людмила',
            text: 'Для мене iPhone найкращий вибір. Жодного разу не пожалкувала, хоча і вибирала не останню найновішу модель. Ця модель мене повністю задовольняє.',
        },
        {
            name: 'Ігор',
            text: 'Жінка дуже задоволена)',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setReviews((prevState) => {
            return [...prevState, newReview]
        })

        setNewReview({
            name: '',
            text: '',
        })
    }

    return (
        <>
            <Typography component="h2" variant="h4" sx={{ margin: '40px 0' }}>
                Reviews
            </Typography>
            {reviews.map(({ name, text }, i) => (
                <Card variant="outlined" key={i} sx={{ margin: '30px 0' }}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}

            <form onSubmit={sendReview}>
                <h3>Please leave review</h3>
                <div>
                    <TextField
                        label="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={7}
                        placeholder="Your message"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
