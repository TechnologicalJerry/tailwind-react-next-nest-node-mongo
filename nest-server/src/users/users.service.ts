import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    try {
      return await createdUser.save();
    } catch (error: any) {
      if (error.code === 11000) {
        // Extract the field that caused the duplication
        const field = Object.keys(error.keyValue)[0];
        // Formatting field name for better readability (camelCase to Title Case approx)
        const fieldName = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
        throw new ConflictException(`${fieldName} already exists`);
      }
      throw error;
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findByIdentifier(identifier: string): Promise<User | null> {
    return this.userModel.findOne({
      $or: [
        { email: identifier },
        { userName: identifier }
      ]
    }).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('UpdateUserDto:', updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
