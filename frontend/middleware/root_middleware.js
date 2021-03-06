import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import PhotoMiddleware from './photo_middleware';
import FollowMiddleware from './follow_middleware';
import LikeMiddleware from './like_middleware';
import CommentMiddleware from './comment_middleware';

const RootMiddleware = applyMiddleware (
  SessionMiddleware,
  UserMiddleware,
  PhotoMiddleware,
  FollowMiddleware,
  LikeMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
