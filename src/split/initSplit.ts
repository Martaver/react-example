/**
 * Split.io Javascript SDK fails because fuse-box won't subpackes with 'browser' entrypoints.
 * Issue posted here: https://github.com/splitio/javascript-client/issues/355
 * and here: https://github.com/fuse-box/fuse-box/issues/1791
 */
import { SplitFactory } from '@splitsoftware/splitio';

// Instantiate the SDK
const factory: SplitIO.ISDK = SplitFactory({
    core: {
        authorizationKey: process.env.SPLIT_AUTHORIZATION_KEY || '',
        // the key can be the logged in
        // user id, or the account id that
        // the logged in user belongs to.
        // The type of customer (user, account, custom)
        // is chosen during Split's sign-up process.
        key: 'key',
    },
    startup: {
        readyTimeout: 1.5, // 1.5 sec
    },
});

// And get the client instance you'll use
export const split: SplitIO.IClient = factory.client();

console.log(process.env.SPLIT_AUTHORIZATION_KEY);
