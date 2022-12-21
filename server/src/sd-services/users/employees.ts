let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class employees {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'employees';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new employees(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_employees_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: employees');

    //appendnew_flow_employees_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: employees');

    if (!this.swaggerDocument['paths']['/postemployee']) {
      this.swaggerDocument['paths']['/postemployee'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/postemployee']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/postemployee`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.usersdb(bh);
          //appendnew_next_sd_LbdJEQETVKDO2cC2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LbdJEQETVKDO2cC2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_employees_HttpIn
  }
  //   service flows_employees

  //appendnew_flow_employees_start

  async usersdb(bh) {
    try {
      bh.input.result = await MongoPersistance.getInstance().insertOne(
        'sd_Aiz2P41UMp1wA0mL',
        'users',
        bh.input.body,
        {}
      );
      bh = await this.sd_0wfx5x57uag5vJDQ(bh);
      //appendnew_next_usersdb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CquVFtqXwnFeEfha');
    }
  }

  async sd_0wfx5x57uag5vJDQ(bh) {
    try {
      console.log(bh.input.body, bh.input.result);
      await this.sd_Hi1rNeOmrzQAStDh(bh);
      //appendnew_next_sd_0wfx5x57uag5vJDQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0wfx5x57uag5vJDQ');
    }
  }

  async sd_Hi1rNeOmrzQAStDh(bh) {
    try {
      bh.web.res.status(200).send(bh.input.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hi1rNeOmrzQAStDh');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_employees_Catch
}
