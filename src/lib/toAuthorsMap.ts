import {Author, AuthorMap} from "../App.types";

const toAuthorsMap = (authors: Author[]): AuthorMap => {
    return authors.reduce<AuthorMap>((authorMap, author) => {
        authorMap[author.id] = author;
        return authorMap;
    }, {});
};

export default toAuthorsMap;
