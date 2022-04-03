import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Todo from "App/Models/Todo";

export default class TodosController {

  public async index({}: HttpContextContract) {
    return Todo.all()
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = request.all()
      const todo = await Todo.create(payload)
      response.json({message:'topic creation success.', todo})
    } catch (e) {
      response.json(e.message)
    }
  }
}
