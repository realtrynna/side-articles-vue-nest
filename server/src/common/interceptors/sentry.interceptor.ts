import { CallHandler, Injectable, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import Sentry from "@sentry/node";

@Injectable()
export class SentryInterceptor implements NestInterceptor {
    intercept(
        _: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> {
        console.log("sentry interceptor")
        return next.handle().pipe(
          catchError((error) => {
              Sentry.captureException(error);
              return null;
          })
        )
    }
}