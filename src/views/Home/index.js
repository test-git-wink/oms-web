import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import { LoadingStatus } from "../../rootReducer/actions";

export const HomePageEvent = {
  GET_HOME_PAGE_DATA: "GET_HOME_PAGE_DATA",
  GET_HOME_PAGE_DATA_RESULT: "GET_HOME_PAGE_DATA_RESULT",
};

export const GetHomePageAction = () => ({
  type: HomePageEvent.GET_HOME_PAGE_DATA,
});

export const GetHomePageResultAction = (data) => ({
  type: HomePageEvent.GET_HOME_PAGE_DATA_RESULT,
  payload: { data },
});

export const HomePageData = {
  loadingStatus: LoadingStatus.LOADING_STARTED,
  data: [],
};

// const initialState = {
//   loadingStatus: LoadingStatus.LOADING_STARTED,
// };

export function homePageReducer(state = HomePageData, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case HomePageEvent.GET_HOME_PAGE_DATA_RESULT: {
        draft.loadingStatus = LoadingStatus.LOADING_SUCCESS;
        draft.data = action.payload;
        break;
      }

      default:
        return state;
    }
  });
}

export const homePageSagas = [getHomePageDataSaga];

function* getHomePageDataSaga() {
  yield takeLatest(HomePageEvent.GET_HOME_PAGE_DATA, callGetHomePageData);
}

function* callGetHomePageData(action) {}
