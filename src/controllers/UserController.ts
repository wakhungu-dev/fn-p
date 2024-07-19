import User from "@/libs/models/user";
import { mongoDbConnection } from "@/libs/mongoDb";

class UserController {
  db: typeof User;
  constructor() {
    this.dbInit();
    this.db = User;
  }
  async dbInit() {
    await mongoDbConnection();
  }
  async getUsers() {
    try {
      const users = await this.db.find();
      return users;
    } catch (error) {
      throw error;
    }
  }
  async getUserById(id: string) {
    try {
      const user = await this.db.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async createUser(data: any) {
    try {
      const newUser = new this.db(data);
      const user = await newUser.save();
      return user;
    } catch (error) {
      throw error;
    }
  }
  async updateUser(id: string, data: any) {
    try {
      const user = await this.db.findByIdAndUpdate(id, data, { new: true });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async deleteUser(id: string) {
    try {
      const user = await this.db.findByIdAndDelete(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await this.db.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  } 

}
 export const userController = new UserController();

