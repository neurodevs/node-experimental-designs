import AbstractSpruceTest, {
    test,
    assert,
    errorAssert,
} from '@sprucelabs/test-utils'
import { Phases } from '../../types'
import WithdrawalReversalDesignImpl, {
    WithdrawalReversalDesign,
} from '../../WithdrawalReversalDesign'

export default class WithdrawalReversalDesignTest extends AbstractSpruceTest {
    private static instance: WithdrawalReversalDesign

    protected static async beforeEach() {
        await super.beforeEach()
        this.instance = this.Design(this.phases)
    }

    @test()
    protected static async canCreateWithdrawalReversalDesign() {
        assert.isTruthy(this.instance)
    }

    @test()
    protected static async throwsWithMissingRequiredOptions() {
        const err = assert.doesThrow(() => {
            // @ts-ignore
            this.Design()
        })
        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['phases'],
        })
    }

    private static get phases() {
        return [] as Phases
    }

    private static Design(phases: Phases) {
        return WithdrawalReversalDesignImpl.Create(phases)
    }
}
