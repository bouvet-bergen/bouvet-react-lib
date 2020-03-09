import { call, put } from 'redux-saga/effects';
import { types } from '../Common/types';
import { WebClient } from 'bouvet-react-lib';

export function* initApplication() {

    try {

        console.log('Hey init application saga!');
        
           
    // let data = yield call(getData, 'posts/42');
    // console.log(data);
    // REACT_APP_WEBCLIENT_BASE_URL=https://jsonplaceholder.typicode.com

    var client = new WebClient();
    client.baseUrl = 'https://jsonplaceholder.typicode.com/';
    const data = yield call(client.get, 'posts/42');
    console.log(client.request());
    console.log(data);

    

    //     // const data = client.get('posts/42');

    //     console.log(data);

    //     const tasks = yield call(getAllTasks);

    //    yield put({
    //         type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
    //         payload: {
    //             tasks,
    //             error: null
    //         }
    //     });

    } catch (error) {       
        console.log(error);
        // yield put({
        //     type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
        //     payload: {
        //         tasks: [],
        //         error: error
        //     }
        // });
    }
}