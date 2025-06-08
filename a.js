const _ = require('lodash')

const { asyncMap } = require('../../../lib/asyncMap')
const conveyor = require('../../../lib/conveyor')
const secQueAnswerModule = require('../../modules/securityQuestionnaire/secQueAnswerModule')

const authorizeAction = require('../common/authorization/authorizeAction')
const getFormattedErrors = require('../common/formatErrors')

const userInputErrorTypes = {
    EmptyAnswers: 'EmptyAnswers',
}

const _validateInput = ({ answersToUpsert }) => {
    const answersToUpsertContent = _.map(answersToUpsert, 'answer')
    const answersWithoutContent = _.filter(answersToUpsertContent, (el) => _.isEmpty(el))

    const userInputErrors = {
        ...(_.size(answersWithoutContent) == 0 ? {} : [{ key: 'answersToUpsert', messages: [userInputErrorTypes.EmptyAnswers] }]),
    }
    return {
        userInputErrors,
        ...(_.isEmpty(userInputErrors) ? {} : { exit: true }),
    }
}

//populate dataDicts for answers b
const _getAnswersDataDict = ({ answersToUpsert, orgPk, userPk }) => {
    return {
        dataDicts: _.map(answersToUpsert, (row) => {
            const { pk, answer, answerDetails, attachedS3Keys } = row
            return { pk, orgPk, answer, answerDetails, attachedS3Keys, createdByPk: userPk }
        }),
    }
}

const _upsertSecQueAnswers = async ({ ctx, action, orgPk, dataDicts }) => {
    return {
        secQueAnswers: await asyncMap(dataDicts, async (dataDict, index) => {
            const { secQueAnswer } = await secQueAnswerModule.upsertSecQueAnswer({
                ctx,
                action,
                dataDict: dataDict,
                orgPk,
            })
            return secQueAnswer
        }),
    }
}

const upsertSecQueAnswers = async ({ action, ctx, answersToUpsert }) => {
    const { db, transaction, user } = ctx
    const input = {
        ctx,
        action,
        db,
        transaction,
        user,
        userPk: user.pk,
        orgPk: user.org.pk,
        answersToUpsert,
    }

    const { secQueAnswers, exit, userInputErrors, forbiddenError } = await conveyor([
        authorizeAction,
        _validateInput,
        _getAnswersDataDict,
        _upsertSecQueAnswers,
    ])(input)

    const errors = getFormattedErrors({ userInputErrors, forbiddenError })
    if (exit) return { secQueAnswers, exit, userInputErrors }
    return { secQueAnswers }
}

const a = <div>asfdasdfdsa</div>

module.exports = upsertSecQueAnswers
