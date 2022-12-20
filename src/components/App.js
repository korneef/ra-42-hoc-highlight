import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';


function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function DateTimePretty(props) {

    const format = "YYYY-MM-DD HH:mm:ss LT";

    const date = moment(props.date, format).locale('ru').fromNow();
    
    return <DateTime date={date} />

}

function Video(props) {
    return (
        <div className="video">
            <iframe title={props.url} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-19 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-19 05:45:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-19 11:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-19 05:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-12-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-11-19 11:10:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}