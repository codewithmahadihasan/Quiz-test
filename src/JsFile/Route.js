import { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import Card from "../Components/Card";
import Eoror from "../Components/Eoror";
import Home from "../Components/Home";
import Main from "../Components/Main/Main";
import { Question } from "../Components/Question/Question";
import Statics from "../Components/Statics";


export const router = createBrowserRouter([

    {
        path: "/",
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'qiiz/:id',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                ,
                element: <Card></Card>
            },
            { path: 'question', element: <Question></Question> },
            {
                path: 'static', element: <Statics></Statics>
            },

            { path: '*', element: <Eoror></Eoror> }
        ]
    },

])