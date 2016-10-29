# Schema Information

## users
|column name| data type | details |
| --- | --- | --- |
| id | integer | not null, primary key |
| username | integer | not null, indexed, unique |
| session_token | integer | not null, indexed, unique |
| password_digest | integer | not null |

## photos
|column name| data type | details |
| --- | --- | --- |
| id | integer | not null, primary key |
| image_url | string | not null | 
| user_id | integer | not null, indexed |
| liked | boolean | |
| title | string | |
| description | text | |

## profiles
|column name| data type | details |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null |
| photos_id | integer | |

## follows
|column name| data type | details |
| --- | --- | --- |
| id | integer | not null, primary key |
| follower_id | integer | not null, indexed |
| followee_id | integer | not null, indexed |

## likes
|column name| data type | details |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null, indexed |
| photo_id | integer | not null, indexed |
