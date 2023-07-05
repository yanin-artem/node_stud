import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  body: string;
}
