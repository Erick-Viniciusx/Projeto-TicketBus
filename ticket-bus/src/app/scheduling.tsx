import { useState } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import {Calendar, DateData, LocaleConfig} from "react-native-calendars"
import { Feather } from "@expo/vector-icons"
import { styles } from "@/styles/schedulingStyle"
import { DayState } from "react-native-calendars/src/types"
import { Button } from "@/components/button"

export function Scheduling(){
    const [day, setDay] = useState<DateData>()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View className="flex-1 p-24">
        <Calendar
          style={styles.calendar}
          renderArrow={(direction: "right" | "left") => (
            <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
          )}
          headerStyle={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#E8E8E8",
            paddingBottom: 10,
            marginBottom: 10,
          }}
          theme={{
            textMonthFontSize: 18,
            monthTextColor: "#E8E8E8",
            todayTextColor: "#F06543",
            selectedDayBackgroundColor: "#F06543",
            selectedDayTextColor: "#E8E8E8",
            arrowColor: "#E8E8E8",
            calendarBackground: "transparent",
            textDayStyle: { color: "#E8E8E8" },
            textDisabledColor: "#717171",
            arrowStyle: {
              margin: 0,
              padding: 0,
            },
          }}
          minDate={new Date().toDateString()}
          hideExtraDays
          onDayPress={setDay}
          markedDates={
            day && {
              [day.dateString]: { selected: true },
            }
          }
          dayComponent={({
            date,
            state,
          }: {
            date: DateData
            state: DayState
          }) => {
            return (
              <TouchableOpacity
                style={[
                  styles.day,
                  date.dateString === day?.dateString && styles.daySelected,
                ]}
                onPress={() => setDay(date)}
              >
                <Text
                  style={[
                    styles.dayText,
                    (state === "inactive" || state === "disabled") &&
                      styles.disabled,
                    state === "today" && styles.today,
                    date.dateString === day?.dateString && styles.dayText,
                  ]}
                >
                  {date.day}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
  
        <Text style={styles.selected}>Data selecionada: {day?.dateString}</Text>

        <Button title="Agendar Ticket" isLoading={isLoading}/>
      </View>
    )
}