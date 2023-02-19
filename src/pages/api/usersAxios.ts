import axios from "axios";
import { User } from "../../models/user"


class UserService {
  async getUsers(): Promise<User[]> {
    console.log("Making call");
    const response = await axios.get<User[]>("/api/users");
    console.log(response.data);
    return response.data;
  }
}

export default new UserService();
