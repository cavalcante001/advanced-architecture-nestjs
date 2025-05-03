import { AlarmSeverity } from 'src/alarms/domain/value-objects/alarm-severity';
import { Alarm } from '../../../../domain/alarm';
import { AlarmEntity } from '../entities/alarm.entity';

export class AlarmMapper {
  public static toDomain(alarmEntity: AlarmEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'low' | 'medium' | 'high',
    );

    const alarmModel = new Alarm(
      alarmEntity.id,
      alarmEntity.name,
      alarmSeverity,
    );

    return alarmModel;
  }

  public static toPersistence(alarm: Alarm): AlarmEntity {
    const entity = new AlarmEntity();
    entity.id = alarm.id;
    entity.name = alarm.name;
    entity.severity = alarm.severity.value;

    return entity;
  }
}
