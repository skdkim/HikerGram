import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware (
  SessionMiddleware,
  UserMiddleware
);

export default RootMiddleware;
