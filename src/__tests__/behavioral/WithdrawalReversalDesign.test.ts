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
        this.instance = this.DefaultDesign()
    }

    @test()
    protected static async canCreateWithdrawalReversalDesign() {
        assert.isTruthy(this.instance)
    }

    @test()
    protected static async throwsWithMissingRequiredOptions() {
        const err = assert.doesThrow(() => {
            // @ts-ignore
            this.WithdrawalReversalDesign()
        })
        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['phases'],
        })
    }

    private static DefaultDesign() {
        return WithdrawalReversalDesignImpl.Create([])
    }

    private static WithdrawalReversalDesign(phases: Phases) {
        return WithdrawalReversalDesignImpl.Create(phases)
    }
}
