import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Post";

export default function Posts({posts, setPosts}) {

    const initialPosts = [{
        id: 1,
        title: 'Между кандидатами не замечено конкурентной борьбы. Промежуточная оценка БДИПЧ',
        body: 'Бюро по демократическим институтам и правам человека ОБСЕ представило промежуточный отчёт миссии' +
            ' по наблюдению за президентскими выборами в Узбекистане. Выводы миссии: между кандидатами пока не ' +
            'замечено прямой или какой-либо значимой конкурентной борьбы,',
        views: 332,
        author: 'Gazeta.uz',
        createdAt: '10.10.2021',
        thumb: "https://www.gazeta.uz/media/img/2021/09/COMIyP16323017309286_b.jpg",
        category: 'Политика'
    }, {
        id: 2,
        title: '«Не могу закончить карьеру без медали за Узбекистан». Оксана Чусовитина возвращается',
        body: 'Гимнастка Оксана Чусовитина, объявившая о завершении карьеры после Олимпиады в Токио, заявила,' +
            ' что возвращается в спорт и готовится к Азиатским играм. «Я просто не могу закончить свою карьеру ' +
            'без медали за Узбекистан», — сказала 46-летняя спортсменка.',
        views: 434,
        author: 'Podrobno.uz',
        createdAt: '02.01.2021',
        thumb: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/106/339/0.jpg',
        category: 'Спорт'
    },
    {
        id: 3,
        title: 'С начала года выявлено хищение газа почти на 78 млрд сумов',
        body: 'За девять месяцев Минэнерго выявило по всей стране хищение 87 млн кубометров газа на 77,8 млрд сумов.' +
            ' В осенне-зимний период потребителям планируется поставить 19 млрд кубометров газа — ' +
            'на 3 млрд кубометров больше, чем в прошлом году.',
        views: 123,
        author: 'Nuz.uz',
        createdAt: '08.10.2021',
        thumb: 'https://www.gazeta.uz/media/img/2021/02/3BnwIj16141011349364_b.jpg',
        category: 'Экономика'
    }, {
        id: 4,
        title: 'Обсуждается добавление выходного дня при совпадении праздников с воскресеньем',
        body: 'Узбекистанцы много лет жалуются на то, что при совпадении праздников с воскресеньем ' +
            'не всегда предоставляется дополнительный выходной. ' +
            'Новая редакции Трудового кодекса может это изменить.',
        views: 565,
        author: 'Repost.uz',
        createdAt: '11.10.2021',
        thumb: 'https://www.gazeta.uz/media/img/2021/08/JVotZj16287642337274_b.jpg',
        category: 'Общество'
    }, {
        id: 5,
        title: 'У населения Кашкадарьинской области самая высокая по стране потребность в жилье',
        body: 'Об этом Шавкат Мирзиёев сообщил 11 октября на встрече с избирателями в Кашкадарье.' +
            ' В этом году в Народную приемную на получение жилья обратились 6000 человек, ' +
            'что является самым высоким показателем в стране',
        views: 845,
        author: 'Nuz.uz',
        createdAt: '11.10.2021',
        thumb: 'http://old.qashqadaryogz.uz/images/2020/2020-noyabr/083---1.jpg',
        category: 'Экономика'
    }, {
        id: 6,
        title: 'Спецпредставитель по Афганистану встретился с конгрессменами',
        body: 'На встрече с делегацией конгрессменов, возглавляемой председателем  Комитета по иностранным делам ' +
            'Грегори Миксом, обсуждались текущее состояние и перспективы дальнейшего сотрудничества',
        views: 605,
        author: 'Repost.uz',
        createdAt: '11.10.2021',
        thumb: 'https://i0.wp.com/nuz.uz/wp-content/uploads/2021/10/photo_2021-10-11_15-48-09.jpg?w=1280&ssl=1',
        category: 'Политика'
    }]

    useEffect(() => setPosts(initialPosts) ,[])

    return (
        <>
            <div className="hero ">
                <div className="hero-head">
                    <Navbar initialPosts={initialPosts} posts={posts} setPosts={setPosts} />
                </div>
                <div className="hero-body">
                    <div className="columns is-multiline">
                        {posts.map(post => (
                            <div className="column is-4" key={post.id}>
                                <Post
                                    thumb={post.thumb}
                                    title={post.title}
                                    author={post.author}
                                    category={post.category}
                                    body={post.body}
                                    createdAt={post.createdAt}
                                    views={post.views}
                                    id={post.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}