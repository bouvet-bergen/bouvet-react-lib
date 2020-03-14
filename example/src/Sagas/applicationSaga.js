import { put } from 'redux-saga/effects';
import { types } from '../Common/types';
import DataComponents from './../Data/components.json';
import DataModules from './../Data/modules.json';

export function* initApplication() {

    try {
        if (DataComponents && DataModules) {

            var modules = DataModules.docs.filter(item => item.kind !== 'package');
            var moduleNames = modules.map(item => 
                item.meta.filename.split('.').slice(0, -1).join('.')).filter((value, index, self) => self.indexOf(value) === index);

            yield put({
                type: types.application.INIT_APPLICATION_FAIL_OR_SUCCESS,
                payload: {
                    components: DataComponents,
                    modules: modules,
                    moduleNames: moduleNames,
                    error: null
                }
            });

        } else {

            yield put({
                type: types.application.INIT_APPLICATION_FAIL_OR_SUCCESS,
                payload: {
                    components: [],
                    modules: [],
                    moduleNames: [],
                    error: null
                }
            });
        }


        // var client = new WebClient();

        // Login
        // const cred = {
        //     "email": "reidar.liabo@bouvet.no",
        //     "password": "P4ssw0rd1",
        //     "pin": 0
        // };

        // const data = yield call(client.post, 'auth', cred);       
        // yield call (client.saveToken, data.accessToken, data.refreshToken);

        // Call api
        // const data2 = yield call(client.get, 'users/current');        
        // console.log(data2);

        // const data3 = yield call(client.get, 'users');        
        // console.log(data3);

        // const data4 = yield call(client.get, 'users/39f52368-99d5-4fa0-a8fe-dbbfdae36814');        
        // console.log(data4);


        //    yield put({
        //         type: actionTypes.tasks.GET_TASKS_FAIL_OR_SUCCESS,
        //         payload: {
        //             tasks,
        //             error: null
        //         }
        //     });

    } catch {
        yield put({
            type: types.application.INIT_APPLICATION_FAIL_OR_SUCCESS,
            payload: {
                components: [],
                modules: [],
                moduleNames: [],
                error: { status: 500, message: 'Could not initialize application' }
            }
        });
    }
}