import { Injectable } from "@nestjs/common";
import { InjectSentry, SentryService } from "@ntegral/nestjs-sentry";

@Injectable()
export class UserService {
  constructor(
      @InjectSentry() private readonly sentryLogger: SentryService
  ) {
  }

  // 잔다리로3안길 23

  async getUserList() {
    try {
      console.log("service execute");

      this.sentryLogger.instance().captureMessage("Test the sentry message method.");

    } catch (err) {
      console.error(err);
    }
  }
}