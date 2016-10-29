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
| user_id | integer | not null, indexed |
| image_url | string | not null | 
| liked | boolean | default: false |
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

## comments
|column name| data type | details |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null, indexed |
| photo_id | integer | not null, indexed |
| body | text | |
