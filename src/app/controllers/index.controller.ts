

import { Request, Response } from 'express';
import { IndexService } from '../services/index.services';

export class IndexController {
  
  private indexService: IndexService;

  constructor() {
    this.indexService = new IndexService();
  }

  welcomeController(req: Request, res: Response): void {
    this.indexService.welcomeService(req, res);
    return;
  }

}