import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((current: Question) => current.published === true);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (current: Question): boolean =>
            current.body.length > 0 ||
            current.expected.length > 0 ||
            current.options.length > 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    return questions.reduce(
        (result: Question | null, current: Question): Question | null =>
            current.id === id ? current : result,
        null
    );
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((current: Question): boolean => current.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((current: Question): string => current.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (sum: number, current: Question) => sum + current.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((current: Question): boolean => current.published)
        .reduce((sum: number, current: Question) => sum + current.points, 0);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    return (
        "id,name,options,points,published" +
        questions.reduce(
            (result: string, current: Question) =>
                result +
                "\n" +
                current.id +
                "," +
                current.name +
                "," +
                current.options.length +
                "," +
                current.points +
                "," +
                current.published,
            ""
        )
    );
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (current: Question): Answer => ({
            questionId: current.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (current: Question): Question => ({ ...current, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return !(
        questions.some(
            (current: Question) => current.type === "multiple_choice_question"
        ) &&
        questions.some(
            (current: Question) => current.type === "short_answer_question"
        )
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(
        (current: Question): Question =>
            current.id === targetId
                ? { ...current, name: newName }
                : { ...current }
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map(
        (current: Question): Question =>
            current.id === targetId
                ? current.type === "multiple_choice_question"
                    ? { ...current, type: newQuestionType, options: [] }
                    : { ...current, type: newQuestionType }
                : { ...current }
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map(
        (current: Question): Question =>
            current.id === targetId
                ? editOptionHelper2(current, targetOptionIndex, newOption)
                : { ...current }
    );
}

function editOptionHelper(
    array: string[],
    index: number,
    value: string
): string[] {
    const newArray = [...array];
    newArray.splice(index, 1, value);
    return newArray;
}

function editOptionHelper2(
    current: Question,
    index: number,
    newOption: string
): Question {
    return {
        ...current,
        options: editOptionHelper(
            current.options,
            index === -1 ? current.options.length : index,
            newOption
        )
    };
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetQuestionIndex = questions.findIndex(
        (current: Question): boolean => current.id === targetId
    );
    const newArray = [...questions];
    newArray.splice(
        targetQuestionIndex + 1,
        0,
        duplicateQuestion(newId, otherFindQuestion(questions, targetId))
    );
    return newArray;
}

function otherFindQuestion(questions: Question[], id: number): Question {
    return questions.reduce(
        (result: Question, current: Question): Question =>
            current.id === id ? current : result,
        makeBlankQuestion(5, "hi", "multiple_choice_question")
    );
}
