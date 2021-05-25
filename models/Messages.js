const mongoose = requiere('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  data: [
    {
      device: {
        id: {
          type: String,
          trim: true
        },
        name: {
          type: String,
          trim: true
        }
      },
      time: {
        type: Number,
        trim: true
      },
      data: {
        type: String,
        trim: true
      },
      ackRequired: {
        type: Boolean,
        trim: true
      },
      lqi: {
        type: Number,
        trim: true
      },
      seqNumber: {
        type: Number,
        trim: true
      },
      nbFrames: {
        type: Number,
        trim: true
      },
      computedLocation: [
        {
          lat: {
            type: Number,
            trim: true
          },
          lng: {
            type: Number,
            trim: true
          },
          radius: {
            type: Number,
            trim: true
          },
          source: {
            type: Number,
            trim: true
          }
        }
      ],
      rinfos: [
        {
          baseStation: {
            id: {
              type: String,
              trim: true
            },
            name:{
              type: String,
              trim: true
            },
            resourceType: {
              type: Number,
              trim: true
            }
          },
          rssi: {
            type: Number,
            trim: true
          },
          rssiRepeaters:{
            type: Number,
            trim: true
          },
          lat: {
            type: Number,
            trim: true
          },
          lng: {
            type: Number,
            trim: true
          },
          snr: {
            type: Number,
            trim: true
          },
          snrRepeaters: {
            type: Number,
            trim: true
          },
          freq: {
            type: Number,
            trim: true
          },
          freqRepeaters: {
            type: Number,
            trim: true
          },
          rep: {
            type: Number,
            trim: true
          },
          repetitions: [
            {
              nseq: {
                type: Number,
                trim: true
              },
              rssi: {
                type: Number,
                trim: true
              },
              snr: {
                type: Number,
                trim: true
              },
              freq: {
                type: Number,
                trim: true
              },
              repeated: {
                type: Boolean,
                trim: true
              }
            }
          ],
          cbStatus: {
            status: {
              type: Number,
              trim: true
            },
            info: {
              type: String,
              trim: true
            },
            cbDef: {
              type: String,
              trim: true
            },
            time: {
              type: Number,
              trim: true
            }
          }
        }
      ],
      downlinkAnswerStatus: {
        baseStation: {
          id: {
            type: String,
            trim: true
          },
          name: {
            type: String,
            trim: true
          },
          resourceType: {
            type: Number,
            trim: true
          }
        },
        plannedPower: {
          type: Number,
          trim: true
        },
        data: {
          type: String,
          trim: true
        },
        operator: {
          type: String,
          trim: true
        },
        country: {
          type: String,
          trim: true
        }
      }
    }
  ],
  paging: {
    next: {
      type: String,
      trim: true
    }
  }
})

module.exports = mongoose.model('Message', messageSchema);