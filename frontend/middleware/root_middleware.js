import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import PhotoMiddleware from './photo_middleware';

const RootMiddleware = applyMiddleware (
  SessionMiddleware,
  UserMiddleware,
  PhotoMiddleware
);

export default RootMiddleware;
